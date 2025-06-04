import React from 'react';

export const Example_2 = () => {
    const isClient = typeof window !== 'undefined';

    return (
        <>
            <h2>Window examples</h2>
            {isClient ? <div clasName='client' /> : <div clasName='server' />}
            <div>
                В данном случае, мы напрямую используем {isClient.toString()} в разметке. Процесс гидратации будет
                прерван, о чем React сообщит в консоли. У тега div выше мы увидим актальный атрибут className, поскольку
                DOM дерево будет полностью перестроено, с нуля.
            </div>
        </>
    );
};
