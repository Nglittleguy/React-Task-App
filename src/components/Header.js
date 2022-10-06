import Button from "./Button"

const Header = ({title, onAdd, showAddTask}) => {

    const btnClicked = (e) => {
        console.log(e)
    }

    return (
        <header className="header">
            <h1>This is my React Test: {title}</h1>
            <Button 
                text = {showAddTask?'Add':'Close'} 
                clickFunction={onAdd}
                color = {showAddTask ? 'green':'red'}
            />
            <Button text = 'A New' clickFunction={btnClicked}/>
            <Button text = 'Button' clickFunction={btnClicked}/>
        </header>
    )
}

export default Header