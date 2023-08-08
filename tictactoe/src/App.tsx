/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *step1: define the states
 *Icon components using react-native-icons
 *structure the layout with btns and Flatlsits
 *define the logic's the handleclick and winning logics
 * style the code
 * finilize the project and git push
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from './Components/Icon';
import {Pressable} from 'react-native';
import {FlatList} from 'react-native';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [gameWinner, setgameWinner] = useState("");
  const [isCross, setisCross] = useState(false);
  const [gamestate, setgameState] = useState(
    new Array(9).fill('initial', 0, 9),
  );
  console.log(gamestate);

  // onPressLogic
  const onChangeIndex = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: 'white',
        textColor: '#000000',
      });
    }

    if (gamestate[itemNumber] === 'initial') {
      const updateGameState = [...gamestate];
      updateGameState[itemNumber] = isCross ? 'Cross' : 'Circle';
      setgameState(updateGameState);
      setisCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'position is already filled',
        backgroundColor: 'red',
        textColor: '#fff',
      });
    }

    // checkIsWinner();
  };

  useEffect(() => {
    const checkIsWinner = () => {
      const winnerset = [
        //rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //coloums
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //crosses
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const winner of winnerset) {
        let [a, b, c] = winner;
        if (
          gamestate[a] !== 'initial' &&
          gamestate[a] === gamestate[b] &&
          gamestate[b] === gamestate[c]
        ) {
          setgameWinner(`${gamestate[a]} won the Game`);
          return;
        }

        if (gamestate.every(item => item !== 'initial')) {
          setgameWinner(`Draw game... ⌛️`);
        }
      }
    };

    checkIsWinner();
  }, [gamestate]);

  // winnerLogic

  const reloadGame = () => {
    setgameWinner('');
    setisCross(false);
    setgameState(new Array(9).fill('initial', 0, 9));
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style={styles.headingText}>Tic Tac Toe</Text>
      {/* infoBtn */}
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.playerInfoText}>{gameWinner}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
          ]}>
          <Text style={styles.playerInfoText}>
            Player {isCross ? 'X' : 'O'} Turn
          </Text>
        </View>
      )}
      {/* GameGrid */}
      <FlatList
        numColumns={3}
        data={gamestate}
        style={styles.grid}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeIndex(index)}>
            <Icon name={item} />
          </Pressable>
        )}
      />
      {/* game action */}
      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'reLoad the game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {},
  headingText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'violet',
    padding: 10,
  },
  playerInfo: {
    marginHorizontal: '10%',
    paddingVertical: '5%',
    backgroundColor: 'pink',
    textAlign: 'center',
    borderRadius: 7,
  },
  playerInfoText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
    backgroundColor: 'orange',
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App;
