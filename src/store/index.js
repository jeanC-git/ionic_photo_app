import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      languages: [
        {
          id: 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
          title: "PHP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
        },
        {
          id: 2,
          image:
            "https://tttlabs.ro/wp-content/uploads/2018/03/blog_ruby3_logo.png",
          title: "Ruby",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
        },
        {
          id: 3,
          image:
            "https://programaenlinea.net/wp-content/uploads/2018/07/javascriptlogo.jpg",
          title: "JavaScript",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
        },
      ],
    };
  },
  mutations: {
    addLanguage(state, languageData) {
      const newLanguage = {
        id: state.languages.length + 1,
        title: languageData.title,
        image: languageData.imageUrl,
        description: languageData.description,
      };
      state.languages.push(newLanguage);
    },
  },
  actions: {
    addLanguage(context, languageData) {
      context.commit("addLanguage", languageData);
    },
  },
  getters: {
    languages(state) {
      return state.languages;
    },
    language(state) {
      return (languageId) => {
        return state.languages.find((lang) => lang.id == languageId);
      };
    },
  },
});

export default store;
