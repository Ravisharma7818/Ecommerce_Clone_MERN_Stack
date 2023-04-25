class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }


    search() {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: 'i'
            }
        } : {}
        // console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }


    filter() {
        // First Create Copy

        const queryCopy = { ...this.queryString };

        // Remove Fields Because We Need Only category 
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el]);

        //  Advanced Filter got 
        // This Line Convery Object to string
        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        this.query = this.query.find(JSON.parse(queryStr));
        return this;

    }
}

module.exports = APIFeatures