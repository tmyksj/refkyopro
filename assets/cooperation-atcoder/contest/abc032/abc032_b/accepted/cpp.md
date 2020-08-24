# AtCoder Beginner Contest 032
## B - 高橋君とパスワード
```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main() {
    string s;
    int k;
    cin >> s >> k;

    set<string> p;
    for (int i = 0; i + k <= static_cast<int>(s.size()); i++) {
        p.insert(s.substr(i, k));
    }

    cout << p.size() << endl;
}
```
