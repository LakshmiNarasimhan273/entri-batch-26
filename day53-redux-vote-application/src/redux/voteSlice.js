import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    technologies: [
        {id: 1, name: "React", votes: 0},
        {id: 2, name: "Angular", votes: 0},
        {id: 3, name: "Java", votes: 0},
        {id: 4, name: ".Net", votes: 0},
        {id: 5, name: "Node", votes: 0},
        {id: 6, name: "Salesforce", votes: 0},
    ]
};

const voteSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {
        voteTech: (state, action) => {
            const tech = state.technologies.find(data => data.id === action.payload);
            // tech = {id: 4, name: .Net, votes: 0};
            if(tech) tech.votes += 1;
        }
    }
});

export const { voteTech } = voteSlice.actions;
export default voteSlice.reducer;