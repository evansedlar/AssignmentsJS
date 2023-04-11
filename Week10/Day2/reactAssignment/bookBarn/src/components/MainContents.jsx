import { Component } from "react";


class MainContent extends Component {

    render() {
        const books = this.props.books
        const list = books.map((book) => {
            return (
                <div class="book">
                    <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}/>
                    <div class="title">{book.title}</div>
                    <p>{book.author}</p>
                </div>
            )
        })

        return(
            <>
                <h2>Books</h2>
                <div class="content">{list}</div>
            </>
        )
    }
}


export default MainContent
