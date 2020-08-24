# 第二回 アルゴリズム実技検定
## J - 文字列解析
```cpp
#include <algorithm>
#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    stack<string> st;
    st.push("");
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        if (s[i] == '(') {
            st.push("");
        } else if (s[i] == ')') {
            string t = st.top(); st.pop();
            string u = st.top(); st.pop();

            string v = t;
            reverse(v.begin(), v.end());

            st.push(u + t + v);
        } else {
            string t = st.top(); st.pop();
            st.push(t + s[i]);
        }
    }

    cout << st.top() << endl;
}
```
