function Panel({id,className, children}) {
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
            id={id}
            onDrop={drop}
            onDragOver={dragOver}
            className={className}>
            {children}

        </div>
    )
}
export default Panel;