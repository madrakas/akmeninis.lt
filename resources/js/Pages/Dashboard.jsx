import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HeroMain from '@/Components/Dashboard/Hero/HeroMain';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard({ auth }) {
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <HeroMain />

        </AuthenticatedLayout>
    );

    
}
