import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import { data } from './dummy';

class Admin extends Component {
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            dummyData: data,
        }
        this.handleChange = this.fileUpload.bind(this);
    }
    //파일 등록
    fileUpload = (index, titleIndex) => event => {
        event.preventDefault();
        const { dummyData } = this.state;
        
        let files = event.target.files;
        
        let copyData = Object.assign([], dummyData);
        copyData[index].titles[titleIndex].fileName = files[0].name;
        
        this.setState({
            dummyData: copyData
        })
        
        /*
        Reducer 사용 시
        const { addItems } = this.props;

        let data = {
            filename: files[0].name,
            filenameId: key,
            sidoCode:sidoCode
        }
        console.log('ff',data)

        addItems(data);
        */
    }

    //파일 삭제(구현안됨)
    fileDelete = (key) => {
        this.setState({ filename: "" });
        let data = {
            deleteId: this.props.match.params['id'],
            deleteYn: true
        }
        this.props.addItem(data);
    }

    render() {
        const { items } = this.props;
        const { dummyData } = this.state;
        //localStorage.setItem('items',JSON.stringify(items));
        return (
            <div className="frame1">
                <div className="header1" >
                    <h2>관리자 페이지</h2>`
                </div>
                <div className="container">
                    {
                        dummyData.map((item, index) => (
                            <div className="container2" key={item.key}>
                                <div className="content">
                                    <h2>{item.sido}</h2>
                                </div>
                                {
                                    item.titles.map((title, titleIndex) => (
                                        <div className="content" key={`title-${index}-${titleIndex}`}>
                                            <div className="contentLeft">
                                                <h3>{title.name}</h3>
                                            </div>
                                            <div className="contentMiddle">
                                                <h3>{title.fileName}</h3>
                                            </div>
                                            <div className="contentRight" >
                                                <label htmlFor={`title-${index}-${titleIndex}`}>
                                                    등록<input type="file" id={`title-${index}-${titleIndex}`} name={item.code} onChange={this.fileUpload(index, titleIndex)} />
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
