import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css'
import { useEffect, useState } from 'react';

const GaleriaElementos = ({ imagenes }: {imagenes: string[]}) => {
const [sizes, setSizes] = useState<{ [key: number]: { width: number; height: number } }>({});

useEffect(() => {
  imagenes.forEach((src, index) => {
    const img = new Image();
    img.onload = () => {
      setSizes(prev => ({ ...prev, [index]: { width: img.naturalWidth, height: img.naturalHeight } }));
    };
    img.src = src;
  });
}, [imagenes]);
    return (
        <Gallery>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {imagenes.map((imagen, index) => (
                <Item
                    key={index}
                    original={imagen}
                    thumbnail={imagen}
                    width={sizes[index]?.width || 800}
                    height={sizes[index]?.height || 600}
                >
                    {({ ref, open }) => (
                        <img
                            ref={ref}
                            onClick={open}
                            src={imagen}
                            alt={`Imagen ${index + 1}`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                            className={"border-gray-400 max-w-full h-auto rounded object-cover cursor-pointer" + (sizes[index]?.height > sizes[index]?.width ? 'aspect-[4/3]' : 'aspect-video')}
                        />
                    )}
                </Item>
            ))}
        </div>
        </Gallery>
    );
}
export default GaleriaElementos;