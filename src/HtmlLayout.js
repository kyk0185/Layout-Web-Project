import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userInfo,data } from './dummy';
import './HtmlLayout.css';

class HtmlLayout extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            filename: "",
            filenameId:"",
            deleteId: "",
            role_name: "",
            code:""
        }

    }

    componentDidMount = () => {
        for (let i = 0; i < userInfo.roles.length; i++) {
            if (userInfo.roles[i].role_no == this.props.match.params['role_no']) {
                this.setState({ role_name: userInfo.roles[i].role_name,code:userInfo.roles[i].code })
            }
        }

        //window.addEventListener("focus", () => {
            for (let i = 0; i < this.props.data.addItem.length; i++) {
                 if (this.props.data.addItem[i].filename !== '') {
                     return (
                         this.setState({ filename: this.props.data.addItem[i].filename, filenameId:this.props.data.addItem[i].filenameId})
                     )
                 }
             }
        //})
    }

    logOut = () => {
        this.props.history.goBack();
    }
    fileUpload = e => {
        let files = e.target.files;
        //this.setState({ filename: files[0].name });
    }
    // 파일업로드 활성화/비활성화
    //renderSection = () => {
      //  for (let i = 0; i < this.props.data.addItem.length; i++) {
        //    if (this.props.data.addItem[i].deleteYn === true) {
          //      return (
            //        <h3>{this.props.data.addItem[i].filename}</h3>
              //  )
            //} else {
              //  return (
                //    <h3></h3>
               // )
           // }
       // }
    //}

    render() {
        return (
            <div className="frame">
                <div className="header" >
                    <h2>{this.state.role_name}</h2>
                    <div className="columnAlign_header">
                        <Link to="/admin" className="cover"> 등록</Link>
                        <button className="cover" onClick={this.logOut}>
                            로그아웃
                        </button>

                    </div>
                </div>
                <div className="container">
                    <div className="content1">
                        <a href="#" className="section1 greens"></a>
                        <div className="section1 greens" />
                        <div className="section1 blueviolets" />
                        <div className="section1 blueviolets" />
                        <div className="section1 blueviolets" />
                    </div>
                    <div className="content2">
                        <div className="section2">
                            <div className="section2_1 greens" >
                                <h3></h3>
                            </div>
                            <div className="section2_2 blueviolets" >
                                <div className="filebox columnAlign">
                                    <label htmlFor="ex_file">파일 업로드</label>
                                    <input type="file" id="ex_file" onChange={e => this.fileUpload(e)} />
                                </div>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section2_1 greens" >
                                <h3>Title</h3>
                            </div>
                            <div className="section2_2 blueviolets " >
                                <div className="columnAlign">
                                    <a href="#open" className="cover">button</a>
                                </div>
                                <div id="open" className="modal">
                                    <div className="window">
                                        <div className="window-header">
                                            <h2>Title</h2>
                                        </div>
                                        <div className="window-contents">
                                            <p>Contents</p>
                                            <div className="window-contents-button">
                                                <a href="#close" className="button">확인</a>
                                                <a href="#close" className="button line">취소</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section2_1 blueviolets" >
                                <h3>Title</h3>
                            </div>
                            <div className="section2_2 greens" >
                                <div className="columnAlign">
                                    <a href="#open" className="cover">button</a>
                                </div>
                                <div id="open" className="modal">
                                    <div className="window">
                                        <div className="window-header">
                                            <h2>Title</h2>
                                        </div>
                                        <div className="window-contents">
                                            <p>Contents</p>
                                            <div className="window-contents-button">
                                                <a href="#close" className="button">확인</a>
                                                <a href="#close" className="button line">취소</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section2_1 blueviolets" >
                                <h3>Title</h3>
                            </div>
                            <div className="section2_2 greens" >
                                <div className="columnAlign">
                                    <a href="#open" className="cover">button</a>
                                </div>
                                <div id="open" className="modal">
                                    <div className="window">
                                        <div className="window-header">
                                            <h2>Title</h2>
                                        </div>
                                        <div className="window-contents">
                                            <p>Contents</p>
                                            <div className="window-contents-button">
                                                <a href="#close" className="button">확인</a>
                                                <a href="#close" className="button line">취소</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section2_1 greens" />
                            <div className="section2_2 blueviolets" />
                        </div>
                    </div>
                    {data.map((item, index) => (
                        <div className="content3">
                            {item.title.map((items, index) => (
                                <div>
                                    {items.code === this.state.code &&
                                        <div className="section3 grays" key={items.key}>
                                            {items.key === this.state.filenameId &&
                                                <div className="columnAlign filebox">
                                                    <h3>{this.state.filename}</h3>
                                                    <label htmlFor="ex_file">파일 업로드</label>
                                                    <input type="file" id="ex_file" onChange={e => this.fileUpload(e)} />
                                                </div>
                                            }
                                        </div> 
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="content4">
                        <div className="section4 yellows" />
                        <div className="section4 blueviolets" />
                        <div className="section4 blueviolets" />
                        <div className="section4 blueviolets" />
                        <div className="section4 blueviolets" />
                    </div>
                </div>
                <div className="footer" />
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(HtmlLayout);