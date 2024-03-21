interface Props {
    avaliableModels : () => string | undefined
}

export const ColorPicker = ({avaliableModels}: any) => {

    console.log(avaliableModels)


  return (
            <div className='flex min-w-full min-h-auto gap-2 justify-start items-center'
            >
            <p
            className="font-medium text-black/90"
            >
            Disponible:
            </p>
            {
                avaliableModels ? (
                        <p
                        className={`rounded-full ring-1 ring-gray-900/35 block min-w-5 min-h-5 hover:scale-110 hover:ring-blue-500/50 hover:ring-2 transition-all duration-300 delay-200 ${avaliableModels === 'Blanco' ? 'bg-white' : 'bg-black'}`}
                        >
                        </p>
                    )
                : <p>cargando...</p>
            }
            </div>
  )
}
