# Judge System Update Test Contest 202004
## B - Picking Balls
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    priority_queue<int, vector<int>, greater<int>> r, b;
    for (int i = 0; i < n; i++) {
        int x;
        string c;
        cin >> x >> c;

        if (c == "R") {
            r.push(x);
        } else {
            b.push(x);
        }
    }

    while (!r.empty()) {
        int x = r.top();
        r.pop();
        cout << x << endl;
    }

    while (!b.empty()) {
        int x = b.top();
        b.pop();
        cout << x << endl;
    }
}
```
