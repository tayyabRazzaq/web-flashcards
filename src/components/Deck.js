import React, {Component} from 'react';
import {connect} from "react-redux";
import styles from '../styles';

class Deck extends Component {

    onAddCardClick = () => this.props.history.push('/question/add');

    onStartQuizClick = () => this.props.history.push('/deck-detail/questions');

    render() {
        const deck = this.props.decksReducer.get('deck');
        const {questions} = deck;
        const questionsCount = questions.length;
        return (
            <div style={styles.mt50}>
                <div style={styles.mt50}>
                    <span style={styles.deckTitle}>{deck.title}</span>
                    <br/>
                    <span style={styles.questionsCount}>{`${questionsCount} Cards`}</span>
                </div>
                <div style={styles.mt50}>
                    <button
                        onClick={this.onAddCardClick}
                        style={Object.assign({}, styles.regularBtn, styles.addCardBtn)}>
                        Add Card
                    </button>
                    <button
                        onClick={this.onStartQuizClick}
                        style={Object.assign({}, styles.regularBtn, styles.startQuizBtn)}>
                        Start Quiz
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

export default connect(mapStateToProps)(Deck);