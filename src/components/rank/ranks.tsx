export default function Ranks() {
    return (
        <div className="bg-[#232225] mt-10 p-14">
            <h1 className="font-bold text-white text-3xl p-4">RANKS</h1>
            <section className="flex  space-x-32">
                <img className="pb-3 " src="../images/logo-valorant.png" alt="" />
                <img className="pb-3 " src="../images/logo-lol.png" alt="" />
            </section>
            <section className="flex  space-between  space-x-4">
                <div className="bg-gradient-to-r from-green-900 via-green-500 to-green-900 w-40 h-40 border-2 border-green-700 rounded">
                    <div className="flex items-center justify-center">
                        <img className="w-28" src="../images/Ascendant_1_Rank.png" alt="" />
                    </div>
                    <p className="text-center text-white font-bold">Ascendente 1</p>
                </div>
                <div className="bg-gradient-to-r from-blue-900 via-pink-200 to-blue-900 w-40 h-40 border-2 border-blue-700 rounded">
                    <div className="flex items-center justify-center">
                        <img className="w-28" src="../images/elo-lol.png" alt="" />
                    </div>
                    <p className="text-center text-white font-bold">Prata 2</p>
                </div>
            </section>
        </div>
    )
}