const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("You clicked it.");
    }

    const handleClick2 = (name) => {
        // Using ES6 string interpolation/template literals with ` (backticks) and ${expr} (interpolated expression)
        console.log(`${name} clicked it.`);
    }

    const handleClick3 = (e) => {
        // We pass the event in this case
        // console.log(e); // This shows the object and I can see what we drilled down bellow
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            {/* In here we need use only a reference to the function, because otherwise it would be called immediately */}
            <button onClick={handleClick}>Click it</button>
            {/* In here we need an annonymous function to be able to pass a parameter, so it is not called until it gets the click
              * What happens here is that the annonymous function is also a reference, hence it is not called immediately.
              */}
            <button onClick={() => handleClick2('Igna')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content
