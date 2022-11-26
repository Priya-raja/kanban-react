function Panel(props) {
    const drop = (e) => {
        e.preventDefault();
        const palette_id = e.dataTransfer.getData('palette_id')
        const palette = document.getElementById(palette_id);
        e.target.appendChild(palette)
    }

    const dragOver = (e) => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}>
            {props.children}

        </div>
    )
}
export default Panel;