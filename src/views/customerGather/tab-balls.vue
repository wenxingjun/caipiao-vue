<template>
	<div class="mui-content mui-row mui-fullscreen" id="app">
		<div class="mui-col-xs-3">
			<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
				<a class="mui-control-item balls-type" v-for="(item, index) in menus" :id="index" v-on:click='toggleChildren(item)'>{{item.text}}<span class='glyphicon' v-bind:class='{ "glyphicon-chevron-right": !item.expanded, "glyphicon-chevron-down": item.expanded }'></span></a>
			</div>
		</div>
		<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;" >
			<div id="" class="mui-control-content" v-for='item in menus' v-if='item.expanded' class="childs" >
				<ul class="mui-table-view" >
					<li class="mui-table-view-cell" v-for='child in item.children'>
						{{child.text}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
