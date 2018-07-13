import React, { Component } from 'react';
import styled from 'styled-components';
import { Revealp } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';

const AudioLine = styled.div`
  position: relative;
  width: 460px;
  height: 1em;
  
  &::before,
  .mainLine {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0.4em;
    width: 100%;
    height: 0.2em;
    background-color: #424242;
  }
  .mainLine {
    background-color: rgb(255, 217, 3);
    width: 0%;
    transition: 1s width linear;
    z-index: 1;
  }
`;

const MusicPlayerContainer = styled.div`
  border: 2px solid #424242;
  padding: 20px;
  align-content: center;
  width: 580px;
  height: 110px;
  position: relative;
  background-color: rgb(255, 251, 202);
  margin-bottom: 10px;
  
`;

const PlayButton = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #424242;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  display: inline-flex;
  transition: transform .2s;

  &:hover{
    transform: scale(1.2);
    p{
      i{
        color: #ff1755;
      }
    }
  }

  p {
    color: #424242;
    margin: auto;
    i{
      margin-bottom: 8px;
      margin-left: 0px;
      transform: scale(1.5);
      transition: color .3s;
    }
  }
`;

export default class AudioPlayer extends Component{

    constructor(props){
        super(props);
        this.state={
            isPlaying: false,
        };
        
        this.playing = [false, false, false];
        this.audio = new Audio();
        this.playingTrack = "";
        this.playingTrack = "";

        this.audio.addEventListener('ended', this.onEnded);
        this.audio.addEventListener('timeupdate', this.onTimeUpdate);

    }

    get(id){
        return document.getElementById(id);
    }

    resetAudioLine = () =>{
        this.get(this.playingTrack+'Line').style.width = '0%';
    };

    onEnded = () =>{
        var index = document.getElementById(this.playingTrack).getAttribute('data-index');
        this.playing[index] = false;
        this.playingTrack = "";
        this.setState({isPlaying: false});
        this.resetAudioLine();
    };

    onTimeUpdate = () =>{
        this.get(this.playingTrack+'Line').style.width = (this.audio.currentTime/this.audio.duration * 100) + '%'; 
    };


    switchTrack = (e) =>{
        const { isPlaying } = this.state;
        
        var caller = e.currentTarget.id;
        var callerIndex = this.get(caller).getAttribute('data-index');
        var song = require('../../Assets/'+caller+'.mp3');
        
        var i;
        
        if(isPlaying){
            //if the audio track that is playing does not match the caller, then switch the track
            if(this.playingTrack != caller){
                this.setState({isPlaying: true});
                
                //Set playing for caller to true and false for others
                for(i = 0; i < this.playing.length; i++){
                    if(i == callerIndex){ this.playing[i] = true; }
                    else{ this.playing[i] = false; }
                }

                this.resetAudioLine();
                this.audio.src = song;
                this.audio.play();

            } else{
                this.audio.pause();
                this.audio.currentTime = 0;

                this.setState({isPlaying: false});
                this.playing[callerIndex] = false;
            }
        } else{
            this.setState({isPlaying: true});
            this.playing[callerIndex] = true;
            if(this.playingTrack != caller){
                this.audio.src = song;
            }
            this.audio.play();
        }

        this.playingTrack = caller;
    }

    render(){

        return(
            <div className="AudioPlayer">
            
                <WhenInView>
                    {({ isInView }) => 
                        <Revealp transform={'left'} hide={!isInView} >
                            <MusicPlayerContainer>
                                <PlayButton id={'MistakesLikeThis'} data-index={0} onClick={this.switchTrack}>
                                    <p>
                                        { !this.playing[0] && <i className="fa fa-play"></i>}
                                        { this.playing[0] && <i className="fa fa-pause"></i>}
                                    </p>
                                </PlayButton>
                                <div className="SongTitle">
                                    <p style={{ margin: '0 0 10px 0', color: '#424242', transform: 'scaleY(1.2)' }}>
                                        Prelow - Mistakes Like This
                                    </p>
                                    <AudioLine >
                                        <span className="mainLine" id="MistakesLikeThisLine"></span>
                                    </AudioLine>
                                </div>
                            </MusicPlayerContainer>
                        
                        </Revealp>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) => 
                        <Revealp transform={'left'} hide={!isInView}>
                            <MusicPlayerContainer>
                                <PlayButton id={'BlindManSee'} data-index={1} onClick={this.switchTrack}>
                                    <p>
                                        { !this.playing[1] && <i className="fa fa-play"></i>}
                                        { this.playing[1] && <i className="fa fa-pause"></i>}
                                    </p>
                                </PlayButton>
                                <div className="SongTitle">
                                    <p style={{ margin: '0 0 10px 0', color: '#424242', transform: 'scaleY(1.2)' }}>
                                        Hip-Hop Soulchef - Blind Man See
                                    </p>
                                    <AudioLine>
                                        <span className="mainLine" id="BlindManSeeLine"></span>
                                    </AudioLine>
                                </div>
                            </MusicPlayerContainer>
                        </Revealp>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) => 
                        <Revealp transform={'left'} hide={!isInView}>
                            <MusicPlayerContainer>
                                <PlayButton id={'TheGirlIHaventMet'} data-index={2} onClick={this.switchTrack}>
                                    <p>
                                        { !this.playing[2] && <i className="fa fa-play"></i>}
                                        { this.playing[2] && <i className="fa fa-pause"></i>}
                                    </p>
                                </PlayButton>
                                <div className="SongTitle">
                                    <p style={{ margin: '0 0 10px 0', color: '#424242', transform: 'scaleY(1.2)' }}>
                                        Kudasai - The Girl I Haven't Met
                                    </p>
                                    <AudioLine>
                                        <span className="mainLine" id="TheGirlIHaventMetLine"></span>
                                    </AudioLine>
                                </div>
                            </MusicPlayerContainer>
                        </Revealp>
                    }
                </WhenInView>

            </div>
        );
    }
}