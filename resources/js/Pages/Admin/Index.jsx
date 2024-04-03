import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HeroMain from '@/Components/Dashboard/Hero/HeroMain';
import { Head } from '@inertiajs/react';



export default function Index({ auth, data }) {
    
    // console.log('Data:' + data.hero.description);

    const hero = data.hero;
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <HeroMain hero={hero} />

        </AuthenticatedLayout>
    );

    
}
