// import React from 'react';
// import Block from './Block/Block';

// import './Background.scss';

// const Background = () => {
//     const blocksLinea01 = [];
//     for (let i = 0; i < 20; i++) {
//         blocksLinea01.push(<Block key={i} />);
//     }

//     const blocksLinea02 = [];
//     for (let i = 0; i < 21; i++) {
//         blocksLinea02.push(<Block key={i} />);
//     }

//     return (
//         <div className='background'>
//             <div className='linea01'>{blocksLinea01}</div>
//             <div className='linea02'>{blocksLinea02}</div>
//         </div>
//     );
// }

// export default Background;


// Background.jsx
import React, { useState, useEffect } from 'react';
import Block from './Block/Block';

import './Background.scss';

const Background = () => {
    const [brickRows, setBrickRows] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const brickWidth = 70; // ширина кирпича в ремах
            const numBricksPerRow = Math.floor(width / brickWidth); // количество кирпичей в строке
            const numRows = 4; // количество строк кирпичей

            // Создаем массив строк кирпичей
            const newBrickRows = Array.from({ length: numRows }, (_, i) => {
                // Проверяем, является ли текущая строка нечетной
                const isEvenRow = i % 2 !== 1;

                // Добавляем один дополнительный блок для нечетных строк
                const numBricks = numBricksPerRow + (isEvenRow ? 1 : 0);

                // Создаем массив кирпичей для каждой строки
                const bricks = Array.from({ length: numBricks }, (_, j) => {
                    // Определяем, должен ли текущий блок быть окрашен в определенный цвет
                    let color = null;
                    if (i === 0 && j === 2) {
                        console.log('1')
                        color = 'black'; // цвет для третьего блока в первой строке
                    } else if (i === 1 && j >= 1 && j <= 5) {
                        console.log('2')

                        color = 'black'; // цвет для блоков со второго по шестой во второй строке
                    } else if (i === 2 && ((j >= 0 && j <= 7) || j === numBricks - 3)) {
                        console.log('3')

                        color = 'black'; // цвет для блоков с первого по восьмой и третьего с конца в третьей строке
                    } else if (i === 3 && j !== numBricks - 2) {
                        console.log('4')

                        color = 'black'; // цвет для всех блоков в четвертой строке, кроме предпоследнего
                    }

                    // Возвращаем компонент Block с соответствующими props
                    return <Block key={j} color={color} />;
                });
                
                // Возвращаем объект с информацией о строке кирпичей
                return { key: i, bricks };
            });

            // Устанавливаем новый массив строк кирпичей
            setBrickRows(newBrickRows);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='background'>
            {brickRows.map(({ key, bricks }) => (
                <div className='brick-row' key={key}>
                    {bricks}
                </div>
            ))}
        </div>
    );
}

export default Background;
