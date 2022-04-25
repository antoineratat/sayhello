import { Card, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { BorderOutlined, CheckSquareOutlined, ForwardOutlined } from '@ant-design/icons'
import './style.css'

interface Lesson {
	lessonID: number
	lessonName: string
	author: string
	duration: number
	difficulty: number
	completed: boolean
	courseID: number
}

interface Props {
	handleClickLesson: (lessonID: number) => void
	lesson: Lesson
}

const LessonCard = ({ lesson, handleClickLesson }: Props) => {
	const { Title } = Typography
	return (
		<>
			<Col span={5}>
				<Card bordered={true} className='card_lesson'>
					<Row>
						<Col span={22}>
							<div className='ant-statistic-title'>LESSON</div>
						</Col>
						<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex' }}>
							<Tooltip
								title={
									lesson.completed
										? `${lesson.lessonName} completed`
										: `${lesson.lessonName} not completed`
								}>
								{lesson.completed && <CheckSquareOutlined className='checkedLesson' />}
							</Tooltip>
						</Col>
					</Row>
					<Row>
						<Col>
							<Title level={4}>{lesson.lessonName}</Title>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<Statistic
								title='Duration'
								className='stat_course_lower'
								value={lesson.duration}
								suffix='h'
							/>
						</Col>
						<Col span={12}>
							<Statistic
								title='Difficulty'
								className='stat_course_lower'
								value={lesson.difficulty}
								suffix='/10'
							/>
						</Col>
					</Row>
				</Card>
			</Col>
			<Col span={1} className='col_arrow'>
				<ForwardOutlined className={lesson.completed ? 'forward_arrow completed' : 'forward_arrow'} />
			</Col>
		</>
	)
}
export default LessonCard
