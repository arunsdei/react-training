import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import List from '../components/list';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Todo Demo App',
            value: '',
            button: 'Add',
            list:[]
        };
       this.delete = this.delete.bind(this);
       this.edit = this.edit.bind(this);
       this.onSave = this.onSave.bind(this);
       this.indexValue = null;
    }

    onSave(){
        const list = this.state.list;
        if (this.indexValue == null) {
            list.push(this.refs.demo.value);
            this.setState({list});
            this.refs.demo.value = '';
        } else {
            list[this.indexValue] = this.refs.demo.value;
            this.setState({list});
            this.refs.demo.value = '';
            this.state.button = 'Add';
        }
    }
    delete(i){
            this.state.list.splice(i);
            this.setState(this.state.list);
    }
    edit(i){
        this.indexValue = i;
        let button = this.state.button;
        button = 'Edit';
        this.setState({button});
        let value = this.state.list[i];
        this.refs.demo.value = value;
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>{this.state.name}</h1>
                        <input 
                            type="text"
                            ref="demo"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                            <button onClick={this.onSave}>{this.state.button}</button>
                            <br/>
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                                _edit={this.edit}
                            />
                            <span class='footer-element pull-right'><label> Assignment Arun Sharma </label></span>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);