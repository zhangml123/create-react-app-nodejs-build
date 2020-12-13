import React from 'react';
import { getServerInfo, } from '../request/request';

class Home extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			"version":""
		}
    } 
    componentWillMount(){
		this.getInfo();
	}
	getInfo = async () => {
        try{
           const info = await getServerInfo();
           this.setState({
                "version":info.version
            })
        }catch(err){
          console.log(err)
        }
    }
    render() {
		const {version} = this.state;
    	return (
    		<div className="content">
				{version !== "" ? "连接服务成功，version :"+version:"未连接服务器。"}
            </div>
    	)
    }
}

export default Home;