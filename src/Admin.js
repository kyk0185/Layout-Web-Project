import React, { Component } from 'react';
import { connect } from 'react-redux';
import { data } from './dummy';
import './Admin.css';

class Admin extends Component {
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            filename: "",
            filenameId: "",
            sidoCode: ""
        }
        this.handleChange = this.fileUpload.bind(this);
    }
    //파일 등록
    fileUpload = index => event => {
        event.preventDefault();
        const {addItems} = this.props;

        let files = event.target.files;
        let sidoCode = event.target.name;
        
        this.setState({ filename: files[0].name, filenameId: index, sidoCode: sidoCode });
        
        let data = {
            filename: files[0].name,
            filenameId: index,
            sidoCode:sidoCode
        }
        console.log('ff',data)
        addItems(data);
    }
    //파일 삭제
    fileDelete = (key) => {
        this.setState({ filename: "" });
        let data = {
            deleteId: this.props.match.params['id'],
            deleteYn: true
        }
        this.props.addItem(data);
    }

    render() {
        const {items} = this.props;
        localStorage.setItem('items',JSON.stringify(items));
        return (
            <div className="frame1">

                <div className="header1" >
                    <h2>관리자 페이지</h2>`
                </div>

                <div className="container">
                    {
                        data.map((item, index) => (
                            <div className="container2" key={item.key}>
                                <div className="content">
                                    <h2>{item.sido}</h2>
                                </div>
                                {
                                    item.title.map((items, index) => (
                                        <div className="content" key={items.key}>
                                            <div className="contentLeft">
                                                <h3>{items.name}</h3>
                                            </div>
                                            {(this.state.filenameId === items.key && this.state.sidoCode === items.code) ? //시도를 추가하는 부분
                                                <div className="contentMiddle">
                                                    <h3>{this.state.filename}</h3>
                                                </div> : null
                                            }
                                            <div className="contentRight" >
                                                <label htmlFor={items.key}>
                                                    등록<input type="file" id={items.key} name={items.code} onChange={this.fileUpload(items.key)} />
                                                </label>
                                                <label htmlFor="ex_file_delete">삭제</label>
                                                {/* <input key={items.key} type="button" id="ex_file_delete" onClick={this.fileDelete(items.key)} /> */}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="footer" />
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        items: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItems: (data) => dispatch({ type: 'ADD_ITEM', data: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);




