import React from 'react';

export const Example_1 = () => {
    const isClient = typeof window !== 'undefined';

    return (
        <>
            <h2>Window examples</h2>
            <div clasName='example'>
                <div clasName={isClient ? 'client-className' : 'server-className'}>
                    У данного div атрибут className всегда будет равен 'server-className', несмотря на условие.
                </div>
                <br />
                <div>Тем не менее, гидратация отработает без ошибок. React просто не обновит атрибуты.</div>
                <br />
                {isClient ? <div clasName='client' /> : <div clasName='server' />}
                <div>
                    Код выше так же не приведет к ошибке, у тега так же будет неактуальный className. Здесь мы точно так
                    же, пусть и менее явно, оперируем атрибутами разметки, на которые фреймворк просто не обратит
                    внимания.
                </div>
            </div>
        </>
    );
};
