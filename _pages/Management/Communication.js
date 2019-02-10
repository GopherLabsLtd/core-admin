// React-related
import React from "react"


import {
    Comment, Avatar, Form, Button, List, Input, Card
} from 'antd';
import moment from 'moment';

const TextArea = Input.TextArea;

const ExampleComment = ({ children, image }) => (
    <Comment
        actions={[<span>Reply to</span>]}
        author={<a>Han Solo</a>}
        avatar={(
            <Avatar
                src={image}
                alt="Han Solo"
            />
        )}
        content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).</p>}
    >
        {children}
    </Comment>
)

export default () => (
    <div className="with-pattern">
        <div>
            <h4>Discussions on topic <i>Database</i></h4>

            <Card bordered={false}>
                <ExampleComment image="https://api.adorable.io/avatars/285/han@adorable.png">
                    <ExampleComment image="https://api.adorable.io/avatars/285/jane@adorable.png">
                        <ExampleComment image="https://api.adorable.io/avatars/285/james@adorable.png" />
                    </ExampleComment>
                </ExampleComment>

                <Communication />
            </Card>
        </div>
    </div>
)

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
)

const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    Add Comment
        </Button>
            </Form.Item>
        </div>
    )

class Communication extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={(
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    )}
                    content={(
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    )}
                />
            </div>
        );
    }
}
