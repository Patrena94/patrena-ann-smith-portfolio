import React from 'react'
import Flashcards from '../Flashcard'
// import arr from "../../assets/test.json"
export default function FlashcardList({flashcards}) {
    return (
        <div className="card-grid">
            {flashcards.map((flashcard, i) =>{
                return<Flashcards flashcard={flashcard} key={flashcard.id} image={flashcard.image} />
            })}
        </div>
    )
}


