

import MainChat from '@/components/chat/MainChat'
import Template from '@/components/Template'


export default function Dashboard() {
    return (
        <Template title="Dashboard - PostcatAF" description="La mejor plataforma para gestionar proyectos." >
            <MainChat title="Chat General" />
        </Template>
    )
}