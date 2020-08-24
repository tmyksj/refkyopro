# AtCoder Beginner Contest 097
## C - K-th Substring
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    int k;
    cin >> s >> k;

    vector<string> sub(s.size() * k, "zzzzz");
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        for (int j = 0; i + j < static_cast<int>(s.size()) && j < k; j++) {
            sub[i * k + j] = s.substr(i, j + 1);
        }
    }

    sort(sub.begin(), sub.end());
    sub.erase(unique(sub.begin(), sub.end()), sub.end());

    cout << sub[k - 1] << endl;
}
```
