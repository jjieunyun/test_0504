<template>
    <div>
        <h1>글을 수정하는 곳입니다</h1>
        <input type="text" v-model="memo.title"> <br>
        <textarea cols="30" rows="10" v-model="memo.memo"></textarea> <br>
        <button @click="updateMemo">수정</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            memo : {
                title : '',
                memo : '',
            }
        }
    },
    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            this.memo = response.data
        })
    },
    methods : {
        updateMemo() {
            const updateMemo = this.memo
            this.$http.put(`/api/memo/update`,updateMemo)
                .then((res) => {
                    console.log(res.data);
                });
            this.$router.push('/')
        }
    }
}
</script>