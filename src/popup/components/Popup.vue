<template>
    <div class="card border-0">
        <div class="card-body">
            <h5 class="card-title">Lorem Ipsum Generator</h5>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="countSelect">Generate</label>
                        <select class="form-control" id="countSelect" v-model="count">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>

                <div class="col">
                    <div class="form-group">
                        <label for="typeSelect">Type</label>
                        <select class="form-control" id="typeSelect" v-model="type">
                            <option value="words">Word(s)</option>
                            <option value="sentences">Sentence(s)</option>
                            <option value="paragraphs">Paragraph(s)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="resultTextarea">Result</label>
                        <textarea class="form-control result" id="resultTextarea" rows="10" v-text="result" ref="result"
                                  readonly></textarea>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="align-items-center col d-flex">
                    <a href="https://github.com/anilcancakir/lorem-ipsum-generator-chrome-extension" target="_blank"
                       class="text-muted small">
                        @anilcancakir
                    </a>
                </div>
                <div class="col d-flex justify-content-end">
                    <button type="button" class="btn btn-sm btn-light mr-1" @click="refresh()">
                        Refresh
                    </button>
                    <button type="button" class="btn btn-sm btn-primary" @click="copy()">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            count: {
                get() {
                    return this.$store.state.count;
                },
                set(value) {
                    this.$store.commit('updateCount', value);
                }
            },
            type: {
                get() {
                    return this.$store.state.type;
                },
                set(value) {
                    this.$store.commit('updateType', value);
                }
            },
            result: {
                get() {
                    return this.$store.getters.generate;
                }
            }
        },
        methods: {
            copy() {
                this.$refs.result.select();
                document.execCommand('copy');
            },
            refresh() {
                this.$store.commit('refresh');
            }
        }
    }
</script>
