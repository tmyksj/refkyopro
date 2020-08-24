# AtCoder Beginner Contest 029
## C - Brute-force Attack
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

void dfs(int n, int i, string s, vector<string>& res) {
    if (i < n) {
        dfs(n, i + 1, s + "a", res);
        dfs(n, i + 1, s + "b", res);
        dfs(n, i + 1, s + "c", res);
    } else {
        res.push_back(s);
    }
}

int main() {
    int n;
    cin >> n;

    vector<string> res(0);
    dfs(n, 0, "", res);

    for (int i = 0; i < static_cast<int>(res.size()); i++) {
        cout << res[i] << endl;
    }
}
```
