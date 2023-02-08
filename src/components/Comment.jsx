import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){
    const [likeCount, setlikeCount] = useState(0)

    function handleLikeComment() {
        setlikeCount((state)=>{
            return state +1
        })
    }

    function handleDeleteComment(){
        console.log('deletar');

        onDeleteComment(content)

    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/EglaFernandes.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent} >
                    <header>
                        <div className={styles.authorAndTime} >
                            <strong>Egla Fernandes</strong>
                            <time title="11 de Maio às 08:00" dateTime="2022-05-11 08:00:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button  onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
    

        </div>
    )
}