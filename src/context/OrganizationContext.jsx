import { createContext, useContext, useState, useEffect } from 'react';
import { getDocument, createDocument } from '../firebase/firestoreService';

const OrganizationContext = createContext();

export function useOrganization() {
    return useContext(OrganizationContext);
}

const defaultOrgData = {
    fullName: '',
    shortName: '',
    address: '',
    email: '',
    phone: [],
    facebook: '',
    instagram: '',
    bank: {
        bankName: '',
        accountName: '',
        accountNumber: ''
    },
    qrCodeUrl: ''
};

export function OrganizationProvider({ children }) {
    const [orgData, setOrgData] = useState(defaultOrgData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadOrgData();
    }, []);

    const loadOrgData = async () => {
        try {
            setLoading(true);
            const data = await getDocument('settings', 'organization');
            if (data) {
                setOrgData({ ...defaultOrgData, ...data });
            } else {
                // If no data exists, we can optionally save the default to DB, 
                // but for now we just use the default state.
            }
        } catch (err) {
            console.error('Error loading organization data:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateOrgData = async (newData) => {
        try {
            // Use createDocument with specific ID 'organization' to ensure it's created or overwritten (upsert)
            // This fixes the issue where updateDocument failed if the document didn't exist yet
            await createDocument('settings', newData, 'organization');
            setOrgData(newData);
            return { success: true };
        } catch (err) {
            console.error('Error updating organization data:', err);
            return { success: false, error: err.message };
        }
    };

    const value = {
        orgData,
        loading,
        error,
        updateOrgData,
        refreshOrgData: loadOrgData
    };

    return (
        <OrganizationContext.Provider value={value}>
            {children}
        </OrganizationContext.Provider>
    );
}
