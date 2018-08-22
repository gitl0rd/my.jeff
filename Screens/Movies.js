import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Card from '../Components/Card'
import CardSection from '../Components/CardSecction'

export default class MovieScreen extends React.Component {  
  static navigationOptions = {
    title: "What's Jeff been up to?",
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieList tmdbID = "4785"/>
      </View>
    );
  }
}

class MovieList extends React.Component {
  state = {credits: []};

  componentWillMount() {
    //http://www.omdbapi.com/
    axios.get('https://api.themoviedb.org/3/person/' + this.props.tmdbID + '/movie_credits?api_key=8a89fa2eade7da702d871d64945a30c7&language=en-US')
      .then(response => this.setState({credits: response.data.cast}));
  }

  renderMovies() {
    return this.state.credits.map(movie => <MovieCard data={movie} key={movie.id}/>);
  }

  render () {
    return (
      <ScrollView>
          {/* <Text>{JSON.stringify(this.state.credits)}</Text> */}
          {this.renderMovies()}
      </ScrollView>
    );
  }
}

class MovieCard extends React.Component {
  render() {
    return(
      <Card style={{width: 150, height: 200}}>
        <CardSection>
          <View style={styles.creditDetail}>
            <Text style={{fontWeight: 'bold'}}>{this.props.data.original_title}</Text>
            <Text>{this.props.data.character}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.image} source={{uri: "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + this.props.data.poster_path}} />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrolly: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  creditDetail: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  image: {
    alignSelf: 'stretch', 
    width: 120, 
    height: 180
  }
});