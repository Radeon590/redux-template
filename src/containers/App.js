import { connect } from 'react-redux';
import action_1 from '../store/actionCreators/action_1'
import action_2 from '../store/actionCreators/action_2'
import Component1 from '../components/component_1';
import Component2 from '../components/component_2';

function App({value_1, value_2, action_1, action_2}){
    return(
        <div>
            <Component1 value_1={value_1} change_value_1={action_1}/>
            <Component2 value_2={value_2} change_value_2={action_2}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        value_1: state.value_1,
        value_2: state.value_2
    }
};

const mapDispatchToProps = {
    action_1,
    action_2
};

export default connect(mapStateToProps, mapDispatchToProps)(App);