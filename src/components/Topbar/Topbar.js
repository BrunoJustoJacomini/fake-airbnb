import TopbarButton from "./TopbarButton";

export default function Topbar(){
    return (
        <div className="flex gap-2">
            <TopbarButton href="/acomodacoes">Acomodações</TopbarButton>
            <TopbarButton>Experiencias</TopbarButton>
            <TopbarButton>Experiencias online</TopbarButton>
        </div>
    )
}