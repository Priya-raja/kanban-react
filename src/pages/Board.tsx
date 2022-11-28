import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Board.css";
import { ApiMockResponse } from "../localStorageFile/dummyData";
import PanelBoard from "../Components/Panel/PanelBoard";
import { ICard, IBoard } from "./BoardVariables";
import CustomInputPanel from "../Components/CustomInput";
import useLocalStorage from "../localStorageFile/useLocalStorage";
import { ThemeContext } from "../ThemeContext";

const Board = () => {
  const [boards, setBoards] = useLocalStorage("boards", ApiMockResponse);
  const { theme } = useContext(ThemeContext);
  const { state } = useLocation();
  const [targetCard, setTargetCard] = useState({
    boardId: 1,
    cardId: 0,
  });

  // async function fetchData() {
  //   const boards: IBoard[] = await fetchBoardList();
  //   setBoards(boards);
  // }
  const addBoardsHandler = (name: string) => {
    const tempBoardsList = [...boards];
    tempBoardsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoardsList);
  };
  //Remove Board
  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  // Add Cards
  const addCardHandler = (boardId: number, title: string) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
      desc: "",
    });
    setBoards(tempBoardsList);
  };

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  //Update Card
  const updateCard = (boardId: number, cardId: number, card: ICard) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  //DragEnd
  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(
      targetCardIndex,
      0,
      sourceCard
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  //DragEnter
  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  return (
    <>
      <div
        className="app-panel"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <div className="app-nav">
          {state != null ? (
            <div className="project-title" style={{ color: theme.background }}>
              <h1 className="project-title" style={{ color: theme.foreground }}>
                {state.newTitle}
              </h1>
            </div>
          ) : (
            <h1 className="project-title" style={{ color: theme.foreground }}>
              My Project
            </h1>
          )}
        </div>
        <div className="app-boards-container">
          <div className="app-boards">
            {boards.map((item) => (
              <PanelBoard
                key={item.id}
                board={item}
                addCard={addCardHandler}
                removeBoard={() => removeBoard(item.id)}
                removeCard={removeCard}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                updateCard={updateCard}
              />
            ))}
            <div className="app-boards-last">
              <CustomInputPanel
                displayClass="app-boards-add-board"
                editClass="app-boards-add-board-edit"
                placeholder="Enter Board Name"
                text="Add Board"
                buttonText="Add Board"
                onSubmit={addBoardsHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
