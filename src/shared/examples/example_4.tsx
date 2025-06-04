import React from 'react';

export const Example_4 = () => {
    return (
        <>
            <h2>Window examples</h2>
            <div>
                <input />
            </div>
            <div>
                <input type='checkbox' />
            </div>
            <div>
                <input type='radio' />
            </div>
            <div>
                <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' loading='lazy' />
            </div>
            <br />
            <div>
                Демонстрация последствий неработающей гидратации. Намеренно добавим
                {' ' + Date.now()} в разметку. Попробуйте выставить throttling, перезагрузить страницу, и
                повзаимодействовать с инпутами выше. Выключите throttling, вы увидите, что их состояние будет сброшено.
                Обратите так же внимание на вкладку network. Если у вас выключен кэш, картинка будет грузиться дважды.
            </div>
        </>
    );
};
