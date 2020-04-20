import {
	animation, trigger, animateChild, group, transition, animate, style, query, state, keyframes
} from '@angular/animations';

// first void
export let fadeInLeft = trigger('fadeInLeft', [
	transition('void => *', [
		style({ opacity: '0', transform: 'translate3d(-100%, 0, 0)', }),
		animate('2000ms')
	]),
])

//second both void and *
export let slidingEffect = trigger('slidingEffect', [
	transition(':enter', [
		style({ transform: 'translateX(-1%)' }),
		animate('0.3s 300ms ease-in')
	]),
	transition(':leave', [
		animate('0.5s ease-out'),
		style({ transform: 'translateX(100%)' }),

	])
])


//third
export let jackInTheBox = trigger('jackInTheBox', [
	transition(':enter', [
		style({opacity: '0'}),
		animate('0.3s 300ms ease-in',
			keyframes([
							style({ opacity: '0', transform: 'scale(0.1) rotate(30deg)', offset: 0 }),
							style({ transform: 'rotate(-10deg)', offset: 0.5 }),
							style({ transform: 'rotate(3deg)', offset: 0.7 }),
							style({ opacity: '1', transform: 'scale(1)', offset: 1 })
			]))
	])
])


// fourth custom state (changeDivSize)
export let changeDivSize = trigger('changeDivSize', [
	state('initial',style({
		backgroundColor:'red',
		width:'100px',
		height:'100px'
	})),
	state('final', style({
		backgroundColor: 'green',
		fontSize: '22px',
		width: '200px',
		height:'200px'
	})),
	transition('initial=>final', animate('900ms')),
	transition('final=>initial',animate('1000ms'))
])

//fifth custom state (ballon)
export let ballonSizeChange = trigger('ballonSizeChange', [
	state('before',style({
		height: '125px',
		width: '125px',
		backgroundColor: '#bbb',
		borderRadius: '50%',
		display: 'inline-block'
	})),
	state('after',style({
		height: '225px',
		width: '225px',
		backgroundColor: 'pink',
		borderRadius: '50%',
		display: 'inline-block'
	})),
	transition('before => after', animate('1000ms')),
	transition('after => before', animate('1400ms'))
])

// sixth custom state 
export let slideLeft= trigger('slideLeft', [
	state('slideLeftbefore',style({
	 transform: 'translateX(0%)'
	})),
	state('slideLeftAfter',style({
		transform: 'translateX(-100%)', 
		opacity:'0', 
		backgroundColor: 'red',
		transition:' 2s ease-out'
	 })),
	transition('slideLeftbefore <=> slideLeftAfter',animate('12000ms'))
])
