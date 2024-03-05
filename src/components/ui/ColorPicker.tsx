interface Color {
    name: string
    hex: string
}

interface Props {
    avaliableModels : string
}

export const ColorPicker = ({avaliableModels}: Props) => {

    const colors : Color[] = [
        { name : 'Blanco',hex: '#fff' },
        { name : 'Negro', hex: '#000' }
    ]

  return (
    <>
        {
            avaliableModels &&  colors && (
                colors.map((color, index) => {
                    if (color.name === avaliableModels){

                        return (
                            <div className='flex min-w-full min-h-auto gap-2 justify-start items-center'
                            key={index}
                            >
                            <p
                            className="font-medium text-black/90"
                            >
                            Disponible:
                            </p>
                            <p
                            className={`rounded-full bg-[#000] ring-1 ring-gray-900/35 block min-w-5 min-h-5 hover:scale-110 hover:ring-blue-500/50 hover:ring-2 transition-all duration-300 delay-200`}
                            >
                            </p>
                        </div>
                    )
                }
                })
            )
        }
    </>
  )
}
