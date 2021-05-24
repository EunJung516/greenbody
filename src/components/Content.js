import React, { Component } from 'react';
import chat_send_btn from '../img/chat_send_btn.png';
import lnb1 from '../img/lnb1.png';
import lnb2 from '../img/lnb2.png';
import lnb3 from '../img/lnb3.png';

function Adit(props){
    console.log(props.info)
    return (
        <ul>
            <li><strong>나이 :</strong> 
                <input 
                    type="number" 
                    value={props.info.value}
                    class="info_input" 
                    id="inputAge"
                    onChange={e => props.handleText(e)}
                />
            </li>
            <li><strong>성별 :</strong>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="남자"
                        checked={props.info.gender === "남자"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    남자 
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="여자"
                        checked={props.info.gender === "여자"} 
                        onChange={e => props.handleRadio(e)}
                        /> 
                    여자 
                </label>
            </li>
            <li><strong>흡연 시작 연령 :</strong>
                <label>
                    <input 
                        type="radio" 
                        name="startAge" 
                        value="20대 미만"
                        checked={props.info.startAge === "20대 미만"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    20대 미만 
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="startAge" 
                        value="20대"
                        checked={props.info.startAge === "20대"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    20대 
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="startAge" 
                        value="30대 이상"
                        checked={props.info.startAge === "30대 이상"} 
                        onChange={e => props.handleRadio(e)}
                        />
                 30대 이상
                </label>
            </li>
            <li><strong>흡연 기간 :</strong>
                <label>
                    <input 
                        type="radio" 
                        name="term" 
                        value="1년 이상~5년 미만"
                        checked={props.info.term === "1년 이상~5년 미만"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    1년 이상~5년 미만 
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="term" 
                        value="5년 이상~10년 미만"
                        checked={props.info.term === "5년 이상~10년 미만"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    5년 이상~10년 미만 
                </label><br/>
                <label>
                    <input 
                        type="radio" 
                        name="term" 
                        value="10년 이상~20년 미만"
                        checked={props.info.term === "10년 이상~20년 미만"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    10년 이상~20년 미만 
                 </label>
                <label>
                    <input 
                        type="radio" 
                        name="term" 
                        value="20년 이상"
                        checked={props.info.term === "20년 이상"} 
                        onChange={e => props.handleRadio(e)}
                        />
                    20년 이상 
                </label>
            </li>
            <li><strong>기저질병 :</strong>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="고혈압" 
                    checked={props.info.disease.includes("고혈압")}
                    onChange={props.handleCheckBox}
                    />
                     고혈압 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="높은 콜레스테롤 수치" 
                    checked={props.info.disease.includes("높은 콜레스테롤 수치")}
                    onChange={props.handleCheckBox}
                    />
                     높은 콜레스테롤 수치 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="심근경색 병력" 
                    checked={props.info.disease.includes("심근경색 병력")}
                    onChange={props.handleCheckBox}
                    />
                     심근경색 병력 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="협십증 병력" 
                    checked={props.info.disease.includes("협십증 병력")}
                    onChange={props.handleCheckBox}
                    />
                     협십증 병력 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="뇌경색 병력" 
                    checked={props.info.disease.includes("뇌경색 병력")}
                    onChange={props.handleCheckBox}
                    />
                     뇌경색 병력 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="기타" 
                    checked={props.info.disease.includes("기타")}
                    onChange={props.handleCheckBox}
                    />
                     기타 
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    name="disease" 
                    value="없음" 
                    checked={props.info.disease.includes("없음")}
                    onChange={props.handleCheckBox}
                    />
                     없음 
                </label>
            </li>
        </ul>
    )
}

function Info(props){
    const diseases = props.info.disease.map(item => {
       return <span id="outputDisease">{item},  </span>
    })
    console.log(diseases)
    return (
        <ul>
            <li><strong>나이 :</strong> <span id="outputAge">{props.info.age}</span></li>
            <li><strong>성별 :</strong> <span id="outputGender">{props.info.gender}</span></li>
            <li><strong>흡연 시작 연령 :</strong> <span id="outputStartAge">{props.info.startAge}</span></li>
            <li><strong>흡연 기간 :</strong> <span id="outputTerm">{props.info.term}</span></li>
            <li><strong>기저질병 :</strong> {diseases}</li>
        </ul>
    )
}

function Warning(props){
    return (
        <ul>
            <li><strong>흡연</strong>: 흡연에 따른 폐 건강 우려</li>
        </ul>
    )
}

function QnA(props){
    return(
        <div className="myPage_chat">
            <ul className="chat_wrap">
                <li className="chat_other"><span className="chat_nickname">닉네임1</span>힘드시면 조금씩 담배를 줄이시는 것도 큰 도움이 될 거예요.</li>
                <li className="chat_other"><span className="chat_nickname">Nickname1</span>Smoking damages your entire cardiovascular system :(</li>
                <li className="chat_my"><span className="chat_nickname">Green user</span>Thank you for your comment. :)</li>
            </ul>
            <div className="chat_input_wrap">
                <input type="text" placeholder="Enter the message" className="chat_input" id="inputConcern"/>
                <button type="button" className="chat_send_btn"><img src={chat_send_btn} alt=""/></button>
            </div>
        </div>
    )
}

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: 1,
            info: {
                age: '',
                gender: '',
                startAge: '',
                term: '',
                disease: []
            }
        }
        this.changeVisible = this.changeVisible.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleText = this.handleText.bind(this);
    } 

    changeVisible(number){
        this.setState({
            visible: number
        })
    }

    renderContent(){
        const { info } = this.state;
        if(this.state.visible === 0){
            return <Adit info={info} handleRadio={this.handleRadio} handleChecked={this.handleChecked} handleCheckBox={this.handleCheckBox} handleText={this.handleText}/>
        }
        else if(this.state.visible === 1){
            return <Info info={info}/>
        }
        else if(this.state.visible === 2){
            return <Warning/>
        }
        else return <QnA/>
    }

    renderButton(){
        if(this.state.visible === 0){
            return <button onClick={this.changeVisible.bind(this, 1)} type="button" class="btn_info_edit">확인</button>;
        }
        else if(this.state.visible === 1){
            return <button onClick={this.changeVisible.bind(this, 0)} type="button" class="btn_info_edit">수정</button>;
        }
    }
    
    handleRadio(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevState => ({
            info: {
                ...prevState.info,
                [name]: value,
            }
        }))
    }

    handleCheckBox(e){
        const value = e.target.value;
        const checked = e.currentTarget.checked;
        
        if(!checked){
            this.setState(prevState => {
                const disease = prevState.info.disease.filter(item => {
                    return item !== value
                })
                console.log(prevState);
                return {
                    info: {
                        ...prevState.info,
                        disease: disease
                    }
                }
            })
        }
        else {
            this.setState(prevState => {
                const disease = [...prevState.info.disease, value]
                return {
                    info: {
                        ...prevState.info,
                        disease: disease
                    }
                }
            })
        }
    }

    handleChecked(value){
        const { info } = this.state;
        console.log(info.disease.indexOf(value))
        /*
        if(info.disease.indexOf(value) == -1){
            return false;
        }
        return true;*/
    }
    
    handleText(e){
        const value = e.target.value;

        this.setState(prevState => ({
            info: {
                ...prevState.info,
                age: value,
            }
        }))
    }

    render(){
        return (
            <div className={"info_wrap info"+this.state.visible}>
                <div className="lnb_wrap">
                    <button onClick={this.changeVisible.bind(this, 1)} type="button" className="lnb lnb1">
                        <img src={lnb1} alt="Info" className="img_base"/>
                    </button>
                    <button onClick={this.changeVisible.bind(this, 2)} type="button" className="lnb lnb2">
                        <img src={lnb2} alt="Warning" className="img_base"/>
                    </button>
                    <button onClick={this.changeVisible.bind(this, 3)} type="button" className="lnb lnb3">
                        <img src={lnb3} alt="QnA" className="img_base"/>
                    </button>
                </div>
                
                <div className={"info_txt info_txt" + this.state.visible}>
                    {this.renderContent()}
                    {this.renderButton()}
                </div>
            </div>
        )
    }
}

export default Content;