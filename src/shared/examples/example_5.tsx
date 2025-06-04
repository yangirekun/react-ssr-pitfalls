import React from 'react';

export const Example_5 = () => {
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
                Предыдущий пример, без намеренной инициации ошибки. Попробуйте выставить throttling, перезагрузить
                страницу, и повзаимодействовать с инпутами выше. Выключите throttling, вы увидите, что их состояние
                останется прежним. Обратите так же внимание на вкладку network. Запрос на картинку будет один.
            </div>
        </>
    );
};
