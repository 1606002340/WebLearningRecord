<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from '../../vue_basic/19_单文件组件/School.vue'
	import Student from '../../vue_basic/19_单文件组件/Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
