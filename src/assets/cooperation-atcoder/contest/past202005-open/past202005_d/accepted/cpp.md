# 第三回 アルゴリズム実技検定
## D - 電光掲示板
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<string> t(5);
    t[0] = ".###..#..###.###.#.#.###.###.###.###.###.";
    t[1] = ".#.#.##....#...#.#.#.#...#.....#.#.#.#.#.";
    t[2] = ".#.#..#..###.###.###.###.###...#.###.###.";
    t[3] = ".#.#..#..#.....#...#...#.#.#...#.#.#...#.";
    t[4] = ".###.###.###.###...#.###.###...#.###.###.";

    int n;
    cin >> n;

    vector<string> s(5);
    for (int i = 0; i < 5; i++) {
        cin >> s[i];
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 10; j++) {
            if (s[0].substr(4 * i + 1, 3) == t[0].substr(4 * j + 1, 3)
                    && s[1].substr(4 * i + 1, 3) == t[1].substr(4 * j + 1, 3)
                    && s[2].substr(4 * i + 1, 3) == t[2].substr(4 * j + 1, 3)
                    && s[3].substr(4 * i + 1, 3) == t[3].substr(4 * j + 1, 3)
                    && s[4].substr(4 * i + 1, 3) == t[4].substr(4 * j + 1, 3)) {
                cout << j;
            }
        }
    }
    cout << endl;
}
```
