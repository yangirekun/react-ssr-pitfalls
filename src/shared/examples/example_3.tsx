import React, { useState, useEffect } from 'react';

export const Example_3 = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <h2>Window examples</h2>
            <br />
            <div clasName={isClient ? 'client-className' : 'server-className'}>
                className у данного div будет актуальным
            </div>
            <br />
            {isClient ? <div clasName='client' /> : <div clasName='server' />}
            <div>У div выше тоже</div>
            <br />
            <div>
                Здесь демонстрируется, как можно исправить проблемы предыдущих примеров, используя связку хуков useState
                и useEffect. Мы не увидим ошибки в консоли, гидратация отработает корректно. Атрибуты у тегов будут
                актуальными.
            </div>
        </>
    );
};
