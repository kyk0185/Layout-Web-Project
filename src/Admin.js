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

        console.log(files);
        console.log(sidoCode);
        
        this.setState({ filename: files[0].name, filenameId: index, sidoCode: sidoCode });
        
        let data = {
            filename: files[0].name,
            filenameId: index,
            sidoCode: sidoCode
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
        //localStorage.setItem('items',JSON.stringify(items));
        console.log(items);
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
                                    item.titles.map((title, titleIndex) => (
                                        <div className="content" key={`title-${index}-${title.key}`}>
                                            <div className="contentLeft">
                                                <h3>{title.name}</h3>
                                            </div>
                                                    <div className="contentMiddle">
                                                        <h3>{title.fileName}</h3>
                                                    </div> 
                                            <div className="contentRight" >
                                                <label htmlFor={title.key}>
                                                    등록<input type="file" id={title.key} name={title.code} onChange={this.fileUpload(title.key)} />
                                                </label>
                                                <label htmlFor="ex_file_delete">삭제</label>
                                                {/* <input key={title.key} type="button" id="ex_file_delete" onClick={this.fileDelete(title.key)} /> */}
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




