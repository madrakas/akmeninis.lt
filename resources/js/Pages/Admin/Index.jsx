import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Section from '@/Components/Dashboard/Section';
import { Head } from '@inertiajs/react';

export default function Index({ auth, data }) {
    
    console.log('Index active');
    // console.log(data.faq);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <Section title="Titulinis tekstas" content="hero" data={data.hero}/>
                <Section title="Apie tekstas" content="about" data={data.about} />
                <Section title='D.U.K.' content="faq" data={data.faq} />
            </div>
        </AuthenticatedLayout>
    );
}
