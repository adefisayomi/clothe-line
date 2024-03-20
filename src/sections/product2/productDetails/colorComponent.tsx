import { useEffect, useState } from "react"





  export function ColorPallete ({color, colors, setColor}: {colors: string [], color: string, setColor: any}) {

    const handleSetColor = (e: any) => setColor(e.target.value)

    return (
          <div>
            
            <h3 className="mb-1 text-xs font-bold uppercase ">colors:</h3>

            <div className="flex items-center gap-2">
                {
                    colors && colors.length > 0 && colors.map((col, index) => (
                        <ColorComponent 
                            key={index} 
                            color={col}
                            handleSetColor={handleSetColor}
                        />
                    ))
                }
            </div>

            {color && <p className="text-[0.6rem] font-light capitalize">{color} color selected</p>}
          </div>
    )
}


function ColorComponent ({color, handleSetColor}: {color: string, handleSetColor: any}) {

    const [colorWithHex, setColorWithHex] = useState<string>('')
    useEffect(() => {
        const hex = getColorHex(color)
        setColorWithHex(`bg-[${hex}]`)
    }, [color])

    return (
      <div>
        <input 
            type="radio" 
            name='color-pallete' 
            className={`appearance-none w-10 rounded-none h-10 relative outline-none ${colorWithHex} cursor-pointer checked:border-4 before:content-[''] before:block before:w-8 before:h-8 before:rounded-md 
            checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:w-[85%] checked:before:h-[85%] checked:rounded-full`} 
            onChange={handleSetColor}
            value={color}
        />
      </div>
    )
}


function getColorHex (coolorName: string ) {
    return colorList.find((color) => color.title === coolorName.toLowerCase())?.value.toLowerCase()
}


const colorList = [
    { "title": "red", "value": "#FF0000" },
    { "title": "blue", "value": "#0000FF" },
    { "title": "green", "value": "#00FF00" },
    { "title": "yellow", "value": "#FFFF00" },
    { "title": "orange", "value": "#FFA500" },
    { "title": "purple", "value": "#800080" },
    { "title": "pink", "value": "#FFC0CB" },
    { "title": "brown", "value": "#A52A2A" },
    { "title": "black", "value": "#000000" },
    { "title": "white", "value": "#FFFFFF" },
    { "title": "gray", "value": "#808080" },
    { "title": "indigo", "value": "#4B0082" },
    { "title": "violet", "value": "#EE82EE" },
    { "title": "turquoise", "value": "#40E0D0" },
    { "title": "maroon", "value": "#800000" },
    { "title": "cyan", "value": "#00FFFF" },
    { "title": "magenta", "value": "#FF00FF" },
    { "title": "olive", "value": "#808000" },
    { "title": "gold", "value": "#FFD700" },
    { "title": "silver", "value": "#C0C0C0" },
    { "title": "beige", "value": "#F5F5DC" },
    { "title": "lavender", "value": "#E6E6FA" },
    { "title": "teal", "value": "#008080" },
    { "title": "peach", "value": "#FFE5B4" },
    { "title": "coral", "value": "#FF7F50" },
    { "title": "tan", "value": "#D2B48C" },
    { "title": "salmon", "value": "#FA8072" },
    { "title": "sky blue", "value": "#87CEEB" },
    { "title": "mauve", "value": "#9370DB" },
    { "title": "charcoal", "value": "#36454F" },
    { "title": "burgundy", "value": "#800020" },
    { "title": "slate", "value": "#708090" },
    { "title": "mint green", "value": "#98FF98" },
    { "title": "forest green", "value": "#228B22" },
    { "title": "ruby", "value": "#E0115F" },
    { "title": "plum", "value": "#DDA0DD" },
    { "title": "mustard", "value": "#FFDB58" },
    { "title": "turmeric", "value": "#FFC40C" },
    { "title": "chartreuse", "value": "#7FFF00" },
    { "title": "orchid", "value": "#DA70D6" },
    { "title": "khaki", "value": "#C3B091" },
    { "title": "periwinkle", "value": "#CCCCFF" },
    { "title": "aqua", "value": "#00FFFF" },
    { "title": "ivory", "value": "#FFFFF0" },
    { "title": "tangerine", "value": "#F28500" },
    { "title": "apricot", "value": "#FDD5B1" },
    { "title": "sienna", "value": "#A0522D" },
    { "title": "brick red", "value": "#CB4154" },
    { "title": "cornflower blue", "value": "#6495ED" },
    { "title": "lemon yellow", "value": "#FFFF9F" }
  ];
  